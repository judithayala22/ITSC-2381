package com.jayala.runnerz1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;;

@Controller
public class PageController {
    @GetMapping("/") // handles main URL 
    public String dashboard(){
        return "dashboard";
    }

    @GetMapping("/encryption") // handles encryption topic etc for the following.
    public String encryption(){
        return "encryption";
    }

    @GetMapping("/fileSharing") // 
    public String fileSharing(){
        return "fileSharing";
    }

    @GetMapping("/scamAwareness") //  
    public String scamAwareness(){
        return "scamAwareness";
    }

    @GetMapping("/secureSharing") //  
    public String secureSharing(){
        return "secureSharing";
    }

    @GetMapping("/threatTracking") //  
    public String threatTracking(){
        return "threatTracking";
    }

    @GetMapping("/digitalSign") //  
    public String digitalSign(){
        return "digitalSign";
    }
}
