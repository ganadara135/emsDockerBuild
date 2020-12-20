# we will use openjdk 8 with alpine as it is a very small linux distro
FROM openjdk:8-jre-alpine3.9

COPY openemsEdge.jar /usr/lib/openems/emsEdge.jar
# copy the packaged jar file into our docker image
# COPY target/demo-0.0.1-SNAPSHOT.jar /demo.jar

RUN mkdir /etc/openems.d
# This is going to be the place, where all the bundle configurations are held.

# EXPOSE 8080 8084 8085 502 8082
# 8080 Felix
# 8084 REST/JSON 
# 8085 UI websocket
# 502  modbus
# 8082 websocket


CMD ["java", "-Dfelix.cm.dir=/etc/openems.d/", "-jar", "/usr/lib/openems/emsEdge.jar"]


#  felix 기본  포트는 8080  임
#  실행시 : docker run -p 9999:8080 ganadara135/emsedge   


#  /usr/bin/java -Dfelix.cm.dir=/etc/openems.d/ -jar /usr/lib/openems/openems.jar
# set the startup command to execute the jar
# CMD ["java", "-jar", "/demo.jar"]