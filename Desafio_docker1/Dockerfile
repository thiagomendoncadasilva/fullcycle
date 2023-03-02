FROM golang:1.16-rc-buster as build
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY *.go ./
RUN go install *.go


FROM  scratch
COPY --from=build /go/bin/main /app
CMD /main
ENTRYPOINT [ "/app" ]

