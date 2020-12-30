from rest_framework import viewsets
from django.http import HttpResponse
from .serializers import birdsSerializer
from .models import birds


class birdsViewSet(viewsets.ModelViewSet):
    queryset = birds.objects.all()
    serializer_class = birdsSerializer

    def post(self, request, *args, **kwargs):
        fileName = request.data['fileName']
        filePath = request.data['filePath']
        birds.objects.create(fileName=fileName, filePath=filePath)
        return HttpResponse({'message': 'Audio created'}, status=200)
