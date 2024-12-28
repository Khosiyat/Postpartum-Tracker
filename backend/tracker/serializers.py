ECHO is on.


from rest_framework import serializers
from .models import PostpartumData

class PostpartumDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostpartumData
        fields = '__all__'

