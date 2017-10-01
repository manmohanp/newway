FROM develar/java:latest
ADD add_1.tar /
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/newway-internalapis.jar"]
EXPOSE 9000
