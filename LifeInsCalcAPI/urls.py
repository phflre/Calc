from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^ajax', views.ajax, name='ajax'),
    url(r'^tasks_json', views.tasks_json, name='tasks_json')
]