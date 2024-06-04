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

	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css"))))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("images"))))
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("the port is " + port)

	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
