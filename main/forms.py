from django import forms
from .models import Resposta

class RSVPForm(forms.ModelForm):
    class Meta:
        model = Resposta
        fields = [
            'name',
            'cellphone',
            'food_restriction',
            'food_restriction_details',
            'bringing_guest',
            'guest_name',
            'guest_food_restriction',
            'guest_food_restriction_details',
            'bringing_kids'
        ]
   
    kids_ages = forms.MultipleChoiceField(choices=[('0-4', '0 a 4 anos'), ('5-10', '5 a 10 anos'), ('10+', 'Mais de 10 anos')], required=False)

    def clean_kids_ages(self):
        data = self.data.getlist('kids_ages')

        return ', '.join(data)
    
    def save(self, commit=True):
        instance = super(RSVPForm, self).save(commit=False)
        
        if commit:
            instance.save()
        
        return instance