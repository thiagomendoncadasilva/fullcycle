
FROM mysql:5.7
COPY people.sql /docker-entrypoint-initdb.d/
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]