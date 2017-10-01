package com.mp.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

/**
 * Created by manamohanpanda on 27/09/2017.
 */
@SpringBootApplication(scanBasePackages={"com.mp.service"})
public class App {

    public static void main (String...args){
        SpringApplication springApplication = new SpringApplication(App.class);
        springApplication.run(args);

        AbstractApplicationContext applicationContext = new AnnotationConfigApplicationContext();
        applicationContext.registerShutdownHook();
    }
}
