lisarm = []

lisarm.push(new Armas("20.659.317-2","Luis","Gonzalez",976581294,"lgonzalez@gmail.com", "SAN VICENTE DE TAGUA TAGUA", "X", "FOGEO","250.000","2","CREDITO","BALA"));
lisarm.push(new Armas("11.111.111-1","WILL","SMITH", 923721940,"wsmith@gmail.com","RANCAGUA","MASCULINO","Rifle Aire Comprimido","300.000","4","DEBITO","POSTONES"));


const listarArmas = () => {
    let filas = "";
    for(let i=0; i<lisarm.length; i++){
        let arm = lisarm[i];
        filas += "<tr>";
        filas += "<td>"+arm.rut+"</td>";
        filas += "<td>"+arm.nombre+"</td>";
        filas += "<td>"+arm.apellido+"</td>";
        filas += "<td>"+arm.telefono+"</td>";
        filas += "<td>"+arm.email+"</td>";
        filas += "<td>"+arm.comuna+"</td>";
        filas += "<td>"+arm.sexo+"</td>";
        filas += "<td>"+arm.modelodearmas+"</td>";
        filas += "<td>"+arm.precio+"</td>";
        filas += "<td>"+arm.cuotas+"</td>";
        filas += "<td>"+arm.pago+"</td>";
        filas += "<td>"+arm.tipodemunicion+"</td>";
        filas += "</tr>";
    }
    document.getElementById("tablaDeDatos").innerHTML = filas;
}

const registrarCliente = () =>{

    let r = document.getElementById("txtrut").value;
    let n = document.getElementById("txtnom").value;
    let a = document.getElementById("txtape").value;
    let t = document.getElementById("txttel").value;
    let e = document.getElementById("txtema").value;
    let c = document.getElementById("cbocom").value;

    let s = "";
    if(document.getElementById("opsexm").checked === true){
        s = "MASCULINO";
    }if(document.getElementById("opsexf").checked === true){
        s = "FEMENINO";
    }if(document.getElementById("opsexx").checked === true){
        s = "X";
    }
    
    let mda = document.getElementById("txtmda").value;
    let pr = document.getElementById("txtpre").value;
    let cu = document.getElementById("cuo").value;

    let p = "";
    if(document.getElementById("opcre").checked === true){
        p = "CREDITO";
    }if(document.getElementById("opdeb").checked === true){
        p = "DEBITO";
    }

    let tp = document.getElementById("mun").value;

    let errores = "";
    if(r.trim().length === 0){
        errores += "El Campo No Debe Quedar En Blanco.\n";
    }else{
        for(let i=0; i<lisarm.length; i++){
            let arm = lisarm[i];
            if(r === arm.rut){
                errores += "El Rut ("+r+") Ya Existe.\n";
            }
        }
    }

    if (n.trim().length === 0){
        errores += "El Nombre No Debe Quedar En Blanco.\n";
    }

    if (a.trim().length === 0){
        errores += "El Apellido No Debe Quedar En Blanco.\n";
    }

    if (t.trim().length === 0){
        errores += "El Telefono No Debe Quedar En Blanco.\n";
    }

    if (e.trim().length === 0){
        errores += "El Email No Debe Quedar En Blanco.\n";
    }

    if (c.trim().length === 0){
        errores += "La Comuna No Debe Quedar En Blanco.\n";
    }

    if (s.trim().length === 0){
        errores += "El Sexo No Debe Quedar En Blanco.\n";
    }

    if (mda.trim().length === 0){
        errores += "El Modelo De Armas No Debe Quedar En Blanco.\n";
    }

    if (pr.trim().length === 0){
        errores += "El Precio No Debe Quedar En Blanco.\n";
    }

    if (cu.trim().length === 0){
        errores += "Las cuotas No Debe Quedar En Blanco.\n";
    }

    if (p.trim().length === 0){
        errores += "El Pago No Debe Quedar En Blanco.\n";
    }

    if (tp.trim().length === 0){
        errores += "El Tipo De Municion No Debe Quedar En Blanco.\n";
    }
    
    
    if (errores === ""){
        let arm = new Armas(r,n,a,Number(t),e,c,s,mda,pr,cu,p,tp);
        lisarm.push(arm); 
        listarArmas();

        let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
        msg += '<strong>Felicitaciones!</strong> Cliente ('+r+') Registrado Correctamente!';
        msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        msg += '</div>';
        document.getElementById("mensajes").innerHTML = msg;

        document.getElementById("txtrut").value="";
        document.getElementById("txtnom").value="";
        document.getElementById("txtape").value="";
        document.getElementById("txttel").value="";
        document.getElementById("txtema").value="";
        document.getElementById("cbocom").value="";
        document.getElementById("opsexm").checked = true;
        document.getElementById("txtmda").value = "";
        document.getElementById("txtpre").value = "";
        document.getElementById("cuo").value = "";
        document.getElementById("opcre").checked = true;
        document.getElementById("mun").value = "";

    }else{
        alert(errores);
    }
}

const consultarCliente =() =>{
    let r = document.getElementById("txtrut").value;

    if(r.trim().length === 0){
        alert("Debe Ingresar El Rut Del Cliente A Buscar!!");
    }else{
        let sw = 0;
        for(let i=0; i<lisarm.length; i++){
            let arm = lisarm[i];
            if(r === arm.rut){
                sw = 1;
                document.getElementById("txtnom").value = arm.nombre;
                document.getElementById("txtape").value = arm.apellido;
                document.getElementById("txttel").value = arm.telefono;
                document.getElementById("txtema").value = arm.email;
                document.getElementById("cbocom").value = arm.comuna;
                
                if(arm.sexo === "M"){
                    document.getElementById("opsexm").checked = true;
                }if(arm.sexo === "F"){
                    document.getElementById("opsexf").checked = true;
                }else if(arm.sexo === "X"){
                    document.getElementById("opsexx").checked = true;
                }

                document.getElementById("txtmda").value = arm.modelodearmas;
                document.getElementById("txtpre").value = arm.precio;
                document.getElementById("cuo").value = arm.cuotas;

                if(arm.pago === "CREDITO"){
                    document.getElementById("opcre").checked === true;
                }else if(arm.pago === "DEBITO"){
                    document.getElementById("opdeb").checked === true;
                }

                document.getElementById("mun").value = arm.tipodemunicion;

            }
        }

        if(sw === 0){
            let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') No Encontrado!</strong> Puede Registrar!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }else if(sw === 1){
            let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') Encontrado!</strong> Puede Modificar o Eliminar!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }
    }
}

const eliminarCliente = () =>{
    let r = document.getElementById("txtrut").value;

    if(r.trim().length === 0){
        alert("Debe Ingresar El Rut Del Cliente Que Desea Eliminar!!");
    }else{
        let sw = 0;
        for(let i=0; i<lisarm.length; i++){
            let arm = lisarm[i];
            if(r === arm.rut){
                let x = confirm("¿Confirma La Eliminacion Del Registro?");
                if (x = true){
                    sw = 1;
                    lisarm.splice(i,1);
                    listarArmas();
                    break;
                }else{
                    sw = 2;
                    break;
                }
            }
        }

        if (sw = 0){
            if(sw === 0){
                let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
                msg += '<strong>Rut ('+r+') No Encontrado!</strong> Imposible Eliminar!';
                msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                msg += '</div>';
                document.getElementById("mensajes").innerHTML = msg;
            }else if(sw === 1){
                let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
                msg += '<strong>Rut ('+r+') Eliminado Correctamente!</strong>!';
                msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                msg += '</div>';
                document.getElementById("mensajes").innerHTML = msg;
    
                document.getElementById("txtrut").value="";
                document.getElementById("txtnom").value="";
                document.getElementById("txtape").value="";
                document.getElementById("txttel").value="";
                document.getElementById("txtema").value="";
                document.getElementById("cbocom").value="";
                document.getElementById("opsexm").checked = true;
                document.getElementById("txtmuda").value = "";
                document.getElementById("txtpre").value = "";
                document.getElementById("cuo").value = "";
                document.getElementById("opcre").checked = true;
                document.getElementById("mun").value = "";
                
            }
        }
    }
}


const modificarCliente = () =>{

    let r = document.getElementById("txtrut").value;
    let n = document.getElementById("txtnom").value;
    let a = document.getElementById("txtape").value;
    let t = document.getElementById("txttel").value;
    let e = document.getElementById("txtema").value;
    let c = document.getElementById("cbocom").value;

    let s = "";
    if(document.getElementById("opsexm").checked === true){
        s = "MASCULINO";
    }if(document.getElementById("opsexf").checked === true){
        s = "FEMENINO";
    }if(document.getElementById("opsexx").checked === true){
        s = "X";
    }
    
    let mda = document.getElementById("txtmda").value;
    let pr = document.getElementById("txtpre").value;
    let cu = document.getElementById("cuo").value;

    let p = "";
    if(document.getElementById("opcre").checked === true){
        p = "CREDITO";
    }if(document.getElementById("opdeb").checked === true){
        p = "DEBITO";
    }

    let tp = document.getElementById("mun").value;

    let errores = "";

    if(r.trim().length === 0){
        errores += "El Campo No Debe Quedar En Blanco.\n";
    }

    if (n.trim().length === 0){
        errores += "El Nombre No Debe Quedar En Blanco.\n";
    }

    if (a.trim().length === 0){
        errores += "El Apellido No Debe Quedar En Blanco.\n";
    }

    if (t.trim().length === 0){
        errores += "El Telefono No Debe Quedar En Blanco.\n";
    }

    if (e.trim().length === 0){
        errores += "El Email No Debe Quedar En Blanco.\n";
    }

    if (c.trim().length === 0){
        errores += "La Comuna No Debe Quedar En Blanco.\n";
    }

    if (s.trim().length === 0){
        errores += "El Sexo No Debe Quedar En Blanco.\n";
    }

    if (mda.trim().length === 0){
        errores += "El Modelo De Armas No Debe Quedar En Blanco.\n";
    }

    if (pr.trim().length === 0){
        errores += "El Precio No Debe Quedar En Blanco.\n";
    }

    if (cu.trim().length === 0){
        errores += "Las cuotas No Debe Quedar En Blanco.\n";
    }

    if (p.trim().length === 0){
        errores += "El Pago No Debe Quedar En Blanco.\n";
    }

    if (tp.trim().length === 0){
        errores += "El Tipo De Municion No Debe Quedar En Blanco.\n";
    }

    
    
    if (errores === ""){

        sw = 0;
        
        for(let i = 0; i<lisarm.length; i++){
            let arm = lisarm [i];
            if(r === arm.rut){
                let x = confirm("¿Confirma La Modificacion De Datos?");
                if (x === true){
                    sw = 1;
                    liscli[i].nombre = n;
                    liscli[i].apellido = a;
                    liscli[i].telefono = Number(t);
                    liscli[i].email = e;
                    liscli[i].comuna = c;
                    liscli[i].sexo = s;
                    liscli[i].modelodearmas = mda;
                    liscli[i].precio = pr;
                    liscli[i].cuotas = cu;
                    liscli[i].pago = p;
                    liscli[i].tipodemunicion = tp;
                    listarArmas();
                    break;
                }else{
                    sw=2;
                    break;
                }
            }
        }
        if(sw === 0){
            let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') No Encontrado!</strong> Imposible Modificar Datos!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }else if(sw === 1){
            let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg += '<strong>Datos Del Cliente ('+r+') Modificados Correctamente!</strong>!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;

            document.getElementById("txtrut").value="";
            document.getElementById("txtnom").value="";
            document.getElementById("txtape").value="";
            document.getElementById("txttel").value="";
            document.getElementById("txtema").value="";
            document.getElementById("cbocom").value="";
            document.getElementById("opsexm").checked = true;
            document.getElementById("txtmda").value = "";
            document.getElementById("txtpre").value = "";
            document.getElementById("cuo").value = "";
            document.getElementById("opcre").checked = true;
            document.getElementById("mun").value = "";
        }



    }else{
        alert(errores);
    }
}