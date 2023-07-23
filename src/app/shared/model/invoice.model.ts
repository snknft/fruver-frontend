export class Invoice {
  constructor(
    public id: string,
    public carro_compras_id: string,
    public monto_total?: string,
    public client?: any,
    public details?: any
  ) {}
}
