from django.db import models


def uploadedFile(instance, fileName):
    return '/'.join(['filePath', str(instance.title), fileName])


class birds(models.Model):
    fileName = models.CharField(max_length=32, blank=False)
    filePath = models.TextField(blank=True)
