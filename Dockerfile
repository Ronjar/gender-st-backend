FROM openjdk:latest
WORKDIR /app
COPY gender-st.jar /app/gender-st.jar
EXPOSE 80
CMD ["java", "-jar", "gender-st.jar"]