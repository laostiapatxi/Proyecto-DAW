var colores=[];
var contador=0;
var canvasSolicitudes=[];
var ctxSolicitudes=[];
var colores2=[];

function ventas(){
productos=[];
productos2=[];
contador=0;
  $.ajax({
        type: "POST",
        url:"datos_pedidos_panel.php",
        async: false,
        success: function(datos){
            var dataJson = eval(datos);
             
            for(var i in dataJson){
                productos.push([dataJson[i].tipo,dataJson[i].talla,dataJson[i].precio,dataJson[i].cantidad]);
                
            }
             for(i=0;i<productos.length;i++){
                 for(x=0;x<productos2.length;x++){
                     if(productos[i][0]==productos2[x][0]){
                         
                         a=parseInt(productos2[x][3]);
                         b=parseInt(productos[i][3]);
                         c=a+b;
                         productos2[x][3]=c;
                         
                         contador++;
                     }
                 }
                 
                 if(contador==0){
                     productos2.push(productos[i]);
                 }
                 
                 
             }
             
             
           for(var i=0;i<productos2.length;i++){
            
           a=parseFloat(productos2[i][3]);
           b=parseFloat(productos2[i][2]);
           c=a*b;
           c=c.toString();
           
           productos2[i].push(c.slice(0,5));
            
    }
             
             
             
             console.log(productos2);
             grafica_tipo_cantidad();
             grafica_tipo_precio();
        },
        error: function (obj, error, objError){
            //avisar que ocurrió un error
        }
});
}

function randomColor(listado,valorTexto,cantidadValor,extra) {
    var color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
 	$(listado).append('<li><span style="width: 20px; height: 10px; display: inline-block; background-color:'+color+';"></span><span style="margin-left: 5px;">'+valorTexto+' - '+cantidadValor+' '+extra+'</span></li>');                         
    return color;
}



function grafica_tipo_cantidad(){
colores=[];
        $("#listado").empty();
                      
	var datos=[];
	for(var i=0;i<productos2.length;i++){
							
	colores.push(randomColor("#listado",productos2[i][0],productos2[i][3],""));
							
							
							
						
	datos.push({
	value:productos2[i][3],
	color:colores[i],
	label:productos2[i][0],
	title:productos2[i][0]
	});

	}
						



						

	ctxSolicitudes = document.getElementById("Holidays").getContext("2d");
	canvasSolicitudes = new Chart(ctxSolicitudes).Pie(datos,{
	responsive:true,
	inGraphDataShow : true,
	annotateDisplay:true,
	inGraphDataAnglePosition : 2,
	inGraphDataRadiusPosition: 3  ,
	inGraphDataPaddingRadius : -8,
	inGraphDataRotate : "inRadiusAxisRotateLabels",
	inGraphDataFontColor : "white",
	inGraphDataFontSize : 16,
	inGraphDataAlign : "to-center",
	inGraphDataVAlign : "to-center",
	graphTitleSpaceAfter : 0,
	footNoteSpaceBefore : 0 ,
	inGraphDataTmpl: "<%=v2%>"
	});
						
	}


function grafica_tipo_precio(){
colores2=[];
        $("#listado2").empty();
                      
	var datos=[];
	for(var i=0;i<productos2.length;i++){
							
	colores2.push(randomColor("#listado2",productos2[i][0],productos2[i][4],"€"));
							
							
							
						
	datos.push({
	value:productos2[i][4],
	color:colores2[i],
	label:productos2[i][0],
	title:productos2[i][0]
	});

	}
						



						

	ctxSolicitudes = document.getElementById("grafica2").getContext("2d");
	canvasSolicitudes = new Chart(ctxSolicitudes).Pie(datos,{
	responsive:true,
	inGraphDataShow : true,
	annotateDisplay:true,
	inGraphDataAnglePosition : 2,
	inGraphDataRadiusPosition: 3  ,
	inGraphDataPaddingRadius : -8,
	inGraphDataRotate : "inRadiusAxisRotateLabels",
	inGraphDataFontColor : "white",
	inGraphDataFontSize : 16,
	inGraphDataAlign : "to-center",
	inGraphDataVAlign : "to-center",
	graphTitleSpaceAfter : 0,
	footNoteSpaceBefore : 0 ,
	inGraphDataTmpl: "<%=v2%>"
	});
						
	}




$(document).ready(function() {
    
    ventas();
    
});