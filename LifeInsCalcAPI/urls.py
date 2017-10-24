from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^ajax', views.ajax, name='ajax'),
    url(r'^GetS8', views.GetS8, name='GetS8')
]