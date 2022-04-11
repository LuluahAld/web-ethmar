import io
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.authtoken.models import Token

from api.Serializers import UserSerializer
from .models import*
from django.contrib.auth import authenticate, login

from rest_framework import status
from rest_framework.decorators import api_view
import json
from rest_framework.authtoken.models import Token

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
# Create your views here.
@api_view(['POST','GET','OPTIONS'])
def LoginUser(request):
    print("SDfcsdf")
    if request.method=='POST':
       
        try:
            data=json.loads(request.body)
            
            
            username = data['email']
            password = data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                
                ser=UserSerializer(user)
                
                return JsonResponse(ser.data,safe=False)
            else:
                return JsonResponse({'msg':"Username or Password invalid"},safe=False)
            
        except Exception as ex:
            return JsonResponse({'msg':ex},safe=False)


@api_view(['POST'])
def RegistrUser(request):
    if request.method=='POST':
        data=json.loads(request.body)
        """stream=io.BytesIO(data)
        parsedata=JSONParser().parse(stream)"""
        
        serializer = UserSerializer(data=data)
        
        if serializer.is_valid():
            
            serializer.save()
            return JsonResponse({'msg':'Your Account is has been created'})
        else:
            return JsonResponse(serializer.errors)
    return JsonResponse({'msg':'Access Denied'})
    
   

