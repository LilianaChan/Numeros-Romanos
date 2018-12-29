<template>
  <v-layout row justify-center>
    <v-btn id="cardcenter" slot="activator" color="primary" dark @click="dialog=true" >Iniciar Sistema Convertidor de Números a Romanos</v-btn>
    
    <v-dialog v-model="dialog" persistent height="700px" width="700px">
      <v-card>
        <v-toolbar flat dark dense style="background-color: rgba(40, 178, 99, 1);" >
          <v-toolbar-title class="font-weight-light">Ejercicio 2 </v-toolbar-title> 
        </v-toolbar> 
        <v-card-title class="headline">Conversor de Números Arabigos a Romano</v-card-title>
        <v-card-text>Bienvenido, Porfavor ingrese un número que este en el rango de 1 a 1000 para convertir a romano</v-card-text>
        <v-layout>
        <v-flex xs12 sm8 px-4 py-3>
          <v-text-field
            v-model="numero"
            label="Número"
          ></v-text-field>
        </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Cancelar</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false; millar(numero)">Convertir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      numero: null,
    }),
    

    methods: {
      millar : function (num) {
        
        var mil=parseInt(num/1000);
        var cen=parseInt(num % 1000 / 100); 
        var dec=parseInt(num % 1000 % 100 / 10); 
        var uni=parseInt(num % 1000 % 100 % 10)
   

       
        alert( "Mil: "+mil+"<br>Centena: "+cen+"<br>Decena: "+dec+"<br>Unidad: "+uni+"<br>")
        document.write("Mil: "+mil+"<br>Centena: "+cen+"<br>Decena: "+dec+"<br>Unidad: "+uni+"<br>" )
       

        for(var i=1; i<=mil; i++){
          document.write("M" )
        } //MILES 
        if (cen<4){
          for(var i=1; i<=cen; i++){
            document.write("C" )
          }
        } //CENTENAS 
        switch(cen) { 
          case 4: alert("CD" ) 
          break; 
          case 5: alert("D" ) 
          break; 
          case 6: alert("DC" ) 
          break; 
          case 7: alert("DCC" ) 
          break; 
          case 8: alert("DCCC" ) 
          break; 
          case 9: alert("CM" ) 
          break;
        } 
        if (dec<4){
          for( var i=0; i<dec; i++){
            document.write("X" )
          }
        } //DECENAS	
        switch(dec){ 
          case 4: alert("XL" ) 
          break; 
          case 5: alert("L" ) 
          break; 
          case 6: alert("LX" ) 
          break; 
          case 7: alert("LXX" ) 
          break; 
          case 8: alert("LXXX" ) 
          break; 
          case 9: alert("XC" ) 
          break;
        } 
        if (uni<4){
          for(var i=0; i<uni; i++){
            document.write("I" )
          }
        } //UNIDADES 
        switch(uni){ 
          case 4: alert("IV" ) 
          break; 
          case 5: alert("V" ) 
          break; 
          case 6: alerte("VI" ) 
          break; 
          case 7: alert("VII" ) 
          break; 
          case 8: alert("VIII" ) 
          break; 
          case 9: alert("IX" ) 
          break;
        } 
      }
    }
  }
</script>

<style>

#cardcenter{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}

</style>

