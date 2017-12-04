import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Usuario} from './Usuario'
import {Pedido} from './Pedido'


@Entity()
@Index("CPF",["CPF",],{unique:true})
export class Cliente {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

   
    @ManyToOne(type=>Usuario, Usuario=>Usuario.clientes, { eager: true })
    @JoinColumn({name: "IdUsuario"})
    Usuario:Usuario;
    

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    CPF:string;
        

   
    @OneToMany(type=>Pedido, pedidos=>pedidos.IdCliente)
    pedidos:Pedido[];
    
}