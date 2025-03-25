import { prisma } from '../postgresDB/prisma';
import { getFootwearData, getSizesById } from './seedData';


async function main() {
    // Borrar todos los registros previos
    // await Promise.all([

    // await prisma.size.deleteMany({})
    // await prisma.footwear.deleteMany({})

    // let start = 0;
    // const batchSize = 48;
    // const maxProducts = 1500;
    // let totalProducts = 0;


    // while (totalProducts < maxProducts) {
    //     const products = await getFootwearData(start);
        
    //     if (!products.length) break; // Si no hay más productos, detenemos el ciclo

    //     await prisma.footwear.createMany({ data: products });

    

    //     totalProducts += products.length;
    //     start += batchSize;

    //     console.log(`Se han insertado ${totalProducts} productos en la base de datos.`);
    // }


    console.log('Productos insertados. Ahora se insertarán las tallas.');

    const sizeBatchSize = 20;
    let processedProducts = 941;
    let totalProductsInDb = await prisma.footwear.count();

    while (processedProducts < totalProductsInDb) {
        // Obtener un lote de 20 productos desde la base de datos
        const productsBatch = await prisma.footwear.findMany({
            skip: processedProducts,
            take: sizeBatchSize,
        });

        for (const product of productsBatch) {

            const idByAdidas = product.slug.split('/')?.pop()?.split('-').at(0) ?? '' 
            console.log(idByAdidas)
            const sizes = await getSizesById(idByAdidas);
            if (!sizes || sizes.length === 0) continue;

            const sku = product.slug.split('/').pop() ?? product.id;
            await prisma.size.createMany({
                data: sizes.map((s, i) => ({
                    ...s,
                    sku: `${sku}-P${i}`,
                    footwearId: product.id,
                })),
            });
        }

        processedProducts += productsBatch.length;
        console.log(`Se han procesado ${processedProducts} productos para tallas.`);
    }

    console.log('Seed Ejecutado correctamente');
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();