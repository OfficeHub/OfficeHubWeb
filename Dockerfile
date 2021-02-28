FROM httpd:2.4
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
ADD src /usr/local/apache2/htdocs/src