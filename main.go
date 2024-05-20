package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		t, _ := template.ParseFiles("index.html")
		t.Execute(w, "index.html")
	})

	http.HandleFunc("/env", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "<h1>test test etst</h1>")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("the port is " + port)

	http.ListenAndServe("0.0.0.0:"+port, nil)
}
