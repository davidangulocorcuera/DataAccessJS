<?php
   
    
    $arrEsperado = array();
    $arrEntityEsperado = array();
    
    $arrEsperado["peticion"] = "add";
    $arrEntityEsperado["str_mid"] = "1 (Un string)";
    $arrEntityEsperado["str_mname"] = "Jaime (Un string)";
    $arrEntityEsperado["str_mfirst_characteristic"] = "DR (Un string)";
    $arrEntityEsperado["str_msecond_characteristic"] = "2 (Un string)";
    $arrEntityEsperado["str_mthird_characteristic"] = "2 (Un string)";
    $arrEntityEsperado["id_curse"]=1;
    
    $arrEsperado["entity"] = $arrEntityEsperado;
    
    
    
    function JSONCorrectoAnnadir($recibido){
        
        $auxCorrecto = false;
        
        if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["entity"])){
            
            $auxJugador = $recibido["entity"];
            if(isset($auxJugador["str_mid"]) && isset($auxJugador["str_mname"]) && isset($auxJugador["str_mfirst_characteristic"])&& isset($auxJugador["str_msecond_characteristic"])&& isset($auxJugador["str_mthird_characteristic"])&& isset($auxJugador["id_curse"])){
                $auxCorrecto = true;
            }
            
        }
        
        
        return $auxCorrecto;
        
    }
