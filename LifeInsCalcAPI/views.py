from django.shortcuts import render

from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from .models import S8

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def ajax(request):
    data = {}
    data['something'] = 'useful'
    return JsonResponse(data)

def tasks_json(request):
    tasks = S8.objects.all()
    data = serializers.serialize("json", tasks)
    return HttpResponse(data, content_type='application/json')