from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

# class RegisterUserView(APIView):
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         user = User.objects.create_user(username=username, password=password)
#         return Response({"message": "User created successfully!"})


class RegisterUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already taken"}, status=400)
        user = User.objects.create_user(username=username, password=password)
        return Response({"message": "User registered successfully!"}, status=201)


class LoginUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = User.objects.get(username=username)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({"access_token": str(refresh.access_token), "refresh_token": str(refresh)})
        return Response({"error": "Invalid credentials"}, status=400)
