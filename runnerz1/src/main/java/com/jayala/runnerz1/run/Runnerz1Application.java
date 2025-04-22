
package com.jayala.runnerz1.run;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication(scanBasePackages = "com.jayala.runnerz1") // Ensure it scans correctly

public class Runnerz1Application {
	
	public static void main(String[] args) {
		SpringApplication.run(Runnerz1Application.class, args);
	}

	// @GetMapping("/")
	// public String dashboard() {
	// 	return "dashboard"; // maps dashboard.html 
	// }
	
	}
