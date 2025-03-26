import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  API_USERS: get('API_USERS').required().asString(),
  API_FOOTWEAR: get('API_FOOTWEAR').required().asString(),
}