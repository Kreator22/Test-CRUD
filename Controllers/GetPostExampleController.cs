using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Models2;
using Repository;
using Repository.Interfacaes;

namespace ReactImport.Controllers
{
    //Тестовый контроллер для изучения/обкатки Get и Post
    [Route("api/[controller]")]
    [ApiController]
    public class GetPostExampleController : ControllerBase
    {
        private MyData data;
        private IRepository repository;

        public GetPostExampleController(IRepository repository)
        {
            this.repository = repository;
            data = new MyData();
        }
            

        [HttpGet("GetData")]
        public MyData GetData()
        {
            var data = repository.GetMyData();
            return data;
        }

        [HttpPost("PostData")]
        public IActionResult PostData(MyData myData)
        {
            repository.SetMyData(myData);
            data = myData;
            return Ok(myData);
        }
    }


}

