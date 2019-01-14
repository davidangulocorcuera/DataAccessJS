<?php
   
    
    $arrEsperado = array();
    $arrEntityEsperado = array();
    
    $arrEsperado["peticion"] = "add";
    
    $arrCurseEsperado["int_id"] = 1;
    $arrCurseEsperado["str_mname"] = "Jaime (Un string)";
    $arrCurseEsperado["str_mfirst_characteristic"] = "DR (Un string)";
    $arrCurseEsperado["str_msecond_characteristic"] = "2 (Un string)";
    $arrCurseEsperado["str_mthird_characteristic"] = "2 (Un string)";
    
    
    $arrEsperado["curse"] = $arrCurseEsperado;
    
    
    
    function JSONCorrectoAnnadir($recibido){
        
        $auxCorrecto = false;
        
        if(isset($recibido["peticion"]) && $recibido["peticion"] ="add" && isset($recibido["curse"])){
            
            $auxJugador = $recibido["curse"];
            if(isset($auxJugador["int_id"]) && isset($auxJugador["str_mname"]) && isset($auxJugador["str_mfirst_characteristic"])&& isset($auxJugador["str_msecond_characteristic"])&& isset($auxJugador["str_mthird_characteristic"])){
                $auxCorrecto = true;
            }
            
        }
        
        
        return $auxCorrecto;
        
    }
