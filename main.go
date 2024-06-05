package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		t, _ := template.ParseFiles("./public/index.html")
		t.Execute(w, "./public/index.html")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("the port is " + port)

	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
