
`pip install 'cython>=0.23.4' git+git://github.com/gevent/gevent.git#egg=gevent`


## run dev server:

`python manage.py runserver`

Starting development server at http://127.0.0.1:8000/


## note

if get this error:

```
  File "/Library/Python/2.7/site-packages/django/db/backends/mysql/base.py", line 27, in <module>
    raise ImproperlyConfigured("Error loading MySQLdb module: %s" % e)
django.core.exceptions.ImproperlyConfigured: Error loading MySQLdb module: dlopen(/Library/Python/2.7/site-packages/_mysql.so, 2): Library not loaded: /usr/local/lib/libmysqlclient.18.dylib
  Referenced from: /Library/Python/2.7/site-packages/_mysql.so
  Reason: image not found
```

try:

`sudo pip uninstall MySQL-python`

`pip install MySQL-python`