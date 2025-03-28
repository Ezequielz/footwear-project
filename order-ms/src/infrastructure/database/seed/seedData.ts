import { AvailabilityStatus, FootwearEntity, Gender } from "../../../domain/entities/footwear/footwear.entity";
import { FootwearResponse } from "./interfaces/footwear";
import { SizeResponse } from "./interfaces/size";
// calzados
// https://www.adidas.com.ar/plp-app/api/taxonomy/calzado
// talles
// https://www.adidas.com.ar/api/products/IH0338/availability
// details
// https://www.adidas.com.ar/api/products/IH0338



interface FootwaerSeed extends Omit<FootwearEntity, 'id' | 'sizes'> { }


export const getFootwearData = async (start: number) => {

    const data = await fetch(`https://www.adidas.com.ar/plp-app/api/taxonomy/calzado?start=${start}&sz=100`);
    const response: FootwearResponse = await data.json();
    const { products } = response;


    const footwear: FootwaerSeed[] = products.map((product, i) => {
        const { title, subTitle, url, priceData, modelNumber, hoverImage, image, colourVariations, id} = product;

        let gender

        if (subTitle.toLowerCase().includes('mujer')) {
            gender = Gender.Women;
        } else if (subTitle.toLowerCase().includes('hombre')) {
            gender = Gender.Men;
        } else if (subTitle.toLowerCase().includes('niño') || subTitle.toLowerCase().includes('niña')) {
            gender = Gender.Kid;
        } else {
            gender = Gender.Unisex;
        }

        const slug = title.replace(/ /g, '-').toLowerCase() + '/' + id + '-' + i;

        const mapeedFoteawer: FootwaerSeed = {
            title,
            price: priceData.price,
            color: colourVariations[0] ?? 'No color',
            modelNumber,
            gender,
            image,
            hoverImage: hoverImage ?? image,
            slug,
            createdAt: new Date(),
            updatedAt: new Date(),

            description: subTitle

        }

        return mapeedFoteawer
    })

    return footwear
}

export const getSizesById = async (id: string) => {
    const myHeaders = new Headers();
    myHeaders.append("accept-language", " es,es-ES;q=0.9,en;q=0.8");
    myHeaders.append("sec-ch-ua", " \"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"");
    myHeaders.append("sec-ch-ua-platform", " \"Windows\"");
    myHeaders.append("sec-fetch-dest", " document");
    myHeaders.append("Referer", "");

    
    const data = await fetch(`https://www.adidas.com.ar/api/products/${id}/availability`, {
        method: 'GET', // o 'POST', dependiendo de la API
        headers: myHeaders,
        redirect: "follow"
    });

    if (!data.ok) {
        throw new Error(`Error en la respuesta: ${data.status} - ${data.statusText}`);
    }
    
    const response: SizeResponse = await data.json();
    const { variation_list } = response;

    const sizes = variation_list.map((variation) => {
        const { sku, availability: stock, availability_status: status, size } = variation;
        return {
            sku,
            stock,
            status: status === 'IN_STOCK' ? AvailabilityStatus.InStock : AvailabilityStatus.NotAvailable,
            size
        }
    })

    return sizes
}
