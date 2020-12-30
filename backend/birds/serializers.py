from rest_framework import serializers
from .models import birds


class birdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = birds
        fields = ('fileName', 'filePath')
