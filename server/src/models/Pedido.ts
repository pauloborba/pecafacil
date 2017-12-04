import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Cliente} from './Cliente'
import {Fornecedor} from './Fornecedor'
import {Prato} from './Prato'
import {LocalEntrega} from './LocalEntrega'


@Entity()
@Index("IdCliente",["IdCliente",])
@Index("IdFornecedor",["IdFornecedor",])
@Index("IdPrato",["IdPrato",])
@Index("IdLocalEntrega",["IdLocalEntrega",])
export class Pedido {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

   
    @ManyToOne(type=>Cliente, IdCliente=>IdCliente.pedidos)
    @JoinColumn()
    IdCliente:Cliente;
    

   
    @ManyToOne(type=>Fornecedor, IdFornecedor=>IdFornecedor.pedidos)
    @JoinColumn()
    IdFornecedor:Fornecedor;
    

   
    @ManyToOne(type=>Prato, IdPrato=>IdPrato.pedidos)
    @JoinColumn()
    IdPrato:Prato;
    

   
    @ManyToOne(type=>LocalEntrega, IdLocalEntrega=>IdLocalEntrega.pedidos)
    @JoinColumn()
    IdLocalEntrega:LocalEntrega;
    

    @Column("datetime",{ 
        nullable:true, 
        })
    PedidoData:Date;
        
}