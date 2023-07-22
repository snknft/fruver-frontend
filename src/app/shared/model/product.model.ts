export class Product {
  constructor(
    public id: string,
    public tipo: string,
    public nombre: string,
    public descripcion: string,
    public imagen: string,
    public valor_unitario: number,
    public cantidad_stock: number
  ) {}
}
