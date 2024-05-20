package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/env", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "<h1>test test etst</h1>")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println("the port is " + port)

	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
