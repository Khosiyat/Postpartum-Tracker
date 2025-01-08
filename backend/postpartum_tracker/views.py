from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework import status

from rest_framework.permissions import IsAdminUser


class ListUsersView(APIView):
    permission_classes = [IsAdminUser]  # Only admin users can access this endpoint

    def get(self, request):
        users = User.objects.all()
        users_data = [{"id": user.id, "username": user.username} for user in users]
        return Response(users_data, status=status.HTTP_200_OK)

class RegisterUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            return Response({"error": "Username and password are required!"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password)
        return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)

class LoginUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = User.objects.get(username=username)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({"access_token": str(refresh.access_token), "refresh_token": str(refresh)})
        return Response({"error": "Invalid credentials"}, status=400)



from rest_framework.decorators import api_view 


@api_view(['POST', 'GET'])
def postpartum_data(request):
    if request.method == 'GET':
        # Handle GET request (e.g., return existing data)
        data = []  # Replace with actual queryset data
        return Response(data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        # Handle POST request (e.g., save new data)
        received_data = request.data
        # Validate and save data here
        return Response({"message": "Data submitted successfully"}, status=status.HTTP_201_CREATED)
