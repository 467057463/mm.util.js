import type from './type';

export default function isArray(obj:any): boolean{
  return type(obj) === 'array';
}