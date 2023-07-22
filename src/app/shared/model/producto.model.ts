export class ProductoModel {
  constructor(
    public id: string,
    public tipo: string,
    public nombre: string,
    public descripcion: string,
    public valor_unitario: number,
    public cantidad_stock: number
  ) {}
}
