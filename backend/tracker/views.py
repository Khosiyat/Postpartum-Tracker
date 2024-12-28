from rest_framework import viewsets
from .models import PostpartumData
from .serializers import PostpartumDataSerializer

class PostpartumDataViewSet(viewsets.ModelViewSet):
    queryset = PostpartumData.objects.all().order_by('-date')
    serializer_class = PostpartumDataSerializer
