/**
 * Arquivo: Controler.js
 * Data: 04/04/2019
 * Descrição: Este arquivo irá conter o código do 'funcionarioCtrl' a qual controlará os modulos de
 * 'funcionarios'
 * Autor: Clecio Gomes**/

// Controller - Funcionario:
funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    //Aqui estamos carregando todos os dados gravados do Funcionarios quando a pagina for recarregada:
    carregarFuncionarios();
    // Metodo responsavel por carregar todos as propriedades do Funcionário
    function carregarFuncionarios() {
        var listarFuncionarios = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(function (d) {
            //se tudo der certo:
            $scope.Funcionarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os funcionarios!");
            });
    }

    // Metodo responsavel por adicionar cada propriedade de um novo Funcionario:
    $scope.adicionarFuncionario = function () {

        var funcionario = {
            funcionarioId: $scope.funcionarioId,
            nome: $scope.nome,
            email: $scope.email,
            departamento: $scope.departamento,
            cargo: $scope.cargo
        };

        var adicionarinfos = funcionarioService.adicionarFuncionario(funcionario);

        adicionarinfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionario();
                alert("Funcionario Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Funcionário nao Adicionado!"); }
        },
            function () {
                alert("Erro ocorrido ao tentar adicionar um novo Funcionario!");
            });
    }
    // limpar os campos após inserir os dados no BD:
    $scope.limparDados = function () {
        $scope.funcionarioId = '';
        $scope.nome = '';
        $scope.email = '';
        $scope.departamento = '';
        $scope.cargo = '';
    }

    //Metodo responsavel por atualizar Funcioanrio pelo ID:
    $scope.atualizarFuncionarioPorId = function (funcionario) {

        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $cope.AtualizadoNome = funcionario.AtualizadoNome;
        $cope.AtualizadoEmail = funcionario.AtualizadoEmail;
        $cope.AtualizadoDepartamento = funcionario.AtualizadoDepartamento;
        $cope.AtualizadoCargo = funcionario.AtualizadoCargo;
    }


    //Metodo responsavel por atualizar Dados do Funcionario
    $scope.atualizarFuncionario = function () {
        var funcionario = {
            FuncioanrioId: $scope.AtualizadoFuncioanarioId,
            Nome: $scope.AtualizadoNome,
            Email: $scope.AtualizadoEmail,
            Departamento: $scope.AtualizadoDepartamento,
            Cargo: $scope.AtualizadoCargo
        };


        var atualizarInfos = funcionarioService.atualizarFuncionario(funcionario);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();

                alert("Funcionario Atualizado com Sucesso!");
                $scope.limparDadosAtualizados();
            } else {
                alert("Funcionario não Atualizado!");
            }
        }, function () {
            alert("Ocorreu um erro ao tentar atualizar o Funcionario");
        });
    }

    //Metodo responsavel por limpar os dados depois  de atualizar funcionario:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoFuncioanarioId = '';
        $scope.AtualizadoFuncioanarioNome = '';
        $scope.AtualizadoFuncioanarioEmail = '';
        $scope.AtualizadoFuncioanarioDepartamento = '';
        $scope.AtualizadoFuncioanarioCargo = '';

    }
});