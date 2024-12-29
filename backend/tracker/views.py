from rest_framework import viewsets
from .models import PostpartumData
from .serializers import PostpartumDataSerializer
from rest_framework.permissions import IsAuthenticated

class PostpartumDataViewSet(viewsets.ModelViewSet):
    queryset = PostpartumData.objects.all().order_by('-date')
    serializer_class = PostpartumDataSerializer
    permission_classes = [IsAuthenticated]
