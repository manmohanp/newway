package com.mp.service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.mp.service.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Type;
import java.util.*;

/**
 * Created by manamohanpanda on 26/09/2017.
 */
@RestController
public class UserService {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    @RequestMapping(value="/", method = RequestMethod.GET)
    public ResponseEntity<String> index(HttpServletRequest request) {

//        Map<String, String> result = new HashMap<>();
//
//        Enumeration headerNames = request.getHeaderNames();
//        while (headerNames.hasMoreElements()) {
//            String key = (String) headerNames.nextElement();
//            String value = request.getHeader(key);
//            result.put(key, value);
//        }

        return new ResponseEntity("Hello", HttpStatus.OK);

    }

    @RequestMapping(value="/users", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<String> users(HttpServletRequest request) {

        Type baseType = new TypeToken<List<User>>() {}.getType();

        ArrayList<User> users = new ArrayList<>();

        User user = new User();
        user.setId(UUID.randomUUID().toString());
        user.setName("Jon Smith");
        user.setUserName("jon.smith@space.com");

        users.add(user);

        user = new User();
        user.setId(UUID.randomUUID().toString());
        user.setName("Brian Let");
        user.setUserName("brian.let@space.com");

        users.add(user);

        user = new User();
        user.setId(UUID.randomUUID().toString());
        user.setName("Amber Star");
        user.setUserName("amber.start@space.com");

        users.add(user);

        return new ResponseEntity<String>(new Gson().toJson(users), HttpStatus.OK);
    }
}
