from django.forms import ModelForm
from . models import birds


class MyForm(ModelForm):
    class Meta:
        model = birds
        fields = '__all__'
