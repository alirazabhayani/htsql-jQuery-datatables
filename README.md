htsql-jQuery-datatables
=======================

Integration of HTSQL with jQuery DataTable

Idea/Inspiration taken from https://bitbucket.org/alimanfoo/htsql-datatables

Major differences in this project for which I had to change the whole project and logic are:
- Support of complex HTSQL Queries( including filter, distinct, where, limit, etc )
- Dynamic DataTables Column Headers for which I don't have to change the HTML file each time I change the query and its outcomes.
- Runtime DataTable DATA and Property change is supported by using the 
DataTable "bDestroy" parameterand setting it to true.

Instructions to use this project:

-   Install HTSQL
-   HTSQL Database from:
        >> wget -q http://dist.htsql.org/misc/htsql_demo.sqlite
-   Clone this project locally:
        >> git clone https://github.com/alirazabhayani/htsql-jQuery-datatables
-   python serve.py sqlite:htsql_demo.sqlite localhost 8000
-   In you browser, go to the url, 
        http://127.0.0.1:8000

