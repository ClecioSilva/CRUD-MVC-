﻿using CrudMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudMVC.Controllers
{
    public class FuncionarioController : Controller
    {
        #region Método para listar Funcionario  -READ
        // GET Funcionario/GetFuncionario

        public JsonResult GetFuncionario()
        {
            using (var db = new FuncionariosEntities()) 
            {
                List<Funcionario> listarfuncionarios = db.Funcionarios.ToList();

                return Json(listarfuncionarios, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Metodo para Adcionar Funcionario - Create
        //POST fUNCIONARIO/ADICIONAR FUNCIONARIO
        [HttpPost]
        public JsonResult AdicionarFuncionario(Funcionario funcionario)
        {
            if (funcionario != null)
            {
                using (var db = new FuncionariosEntities())
                {
                    db.Funcionarios.Add(funcionario);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { sucess = false });            
        }
        #endregion

        #region Metodo para atualizar Funcionario - UPDATE

        [HttpPost]
        public JsonResult AtualizarFuncionario(Funcionario funcionario)
        {
            using (var db = new FuncionariosEntities())
            {
                var funcionarioAtualizado = db.Funcionarios.Find(funcionario.FuncionarioId);
                if (funcionarioAtualizado == null)
                {
                    return Json(new  { success = false });
                }

                else
                {
                    funcionarioAtualizado.Nome = funcionario.Nome;
                    funcionarioAtualizado.Departamento= funcionario.Departamento;
                    funcionarioAtualizado.Cargo = funcionario.Cargo;
                    funcionarioAtualizado.Email = funcionario.Email;

                    db.SaveChanges();
                    return Json(new { success = true});

                }
            }
        }
        #endregion
    }
}