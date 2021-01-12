using Microsoft.AspNetCore.SignalR;
using SignalR.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR.Api.Hubs
{
    //RPC
    public class PromoHub : Hub
    {
        /*
         * RPC
         * Cliente - JS/C#/Java
         * Cliente ->  Hub (funcionário cadastrando a promoção) - Método: CadastrarPromoção
         * Hub -> Cliente (Cliente recebendo a promoção cadastrada) - Método: ReceberPromoção
         * O cliente poderá chamar métodos dentro do cliente e o cliente poderá chamar métodos dentro do Hub
         * 
         */

        //Idéia: Quando um produto for cadastrado o Hub notificará o client

        public async Task CadastrarPromocao(Promocao promo)
        {
            /*
             * Lógicas
             * Banco de dados
             * Notificação pro client (SignalR)
             */

            await Clients.Caller.SendAsync("CadastradoSucesso"); //Notificar caller -> Cadastro efetuado com sucesso
            await Clients.Others.SendAsync("ReceberPromocao", promo); //Notificar que a promoção chegou

            //Clientes é método do Hub
            //Clients.All -> todos
            //Clients.Caller -> somente quem ativou o método, ou seja, o cara que cadastrou a promoção
            //Clients.Others -> Todos menos o cara que ativou o método, ou seja todos menos o cara que cadastrou a promoção
        }
    }
}
