export class ShoppingCartDetail {
  constructor(
    public id: string,
    public carro_compras_id: number,
    public producto_id: number,
    public cantidad_producto: number,
    public product?: any,
  ) {}
}
