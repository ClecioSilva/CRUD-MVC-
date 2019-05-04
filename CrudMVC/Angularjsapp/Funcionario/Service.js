/**
 * Arquivo: Service.js
 * Data: 04/04/2019
 * Descrição: Arquivo responsavel por carregar os dados via http.get - do MVC Controller
 * (omde transformará os dados em Json)
 * Autor: Clecio Gomes
 **/

funcionarioApp.service('funcionarioService', function ($http) {
    //Metodo responsavel por Listar todos os funcionarios : READ
    this.getTodosFuncionarios = function () {
        return $http.get("/Funcionario/GetFuncionario");
    }

    //Método responsavel pora adicionar funcionario: CREATE
    this.adicionarFuncionario = function (funcionario) {
        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarFuncionario',
            data: funcionario
        });

        return request;
    },

        //METODO RESPONSAVEL POR ATUALIZAR FUNCIONARIO POR ID: UPDATE
        this.atualizarFuncionario = function (funcionario) {

            var request = $http({
                method: 'post',
                url: '/Funcionario/AtualizarFuncionario',
                data: funcionario
            });

            return request;

        }
})