from django import forms

class RSVPForm(forms.Form):
    name = forms.CharField(max_length=100)
    cellphone = forms.CharField(max_length=20)
    food_restriction = forms.ChoiceField(choices=[('yes', 'Sim'), ('no', 'Não')])
    food_restriction_details = forms.CharField(max_length=200, required=False)
    bringing_guest = forms.ChoiceField(choices=[('yes', 'Sim'), ('no', 'Não')])
    guest_name = forms.CharField(max_length=100, required=False)
    guest_food_restriction = forms.ChoiceField(choices=[('yes', 'Sim'), ('no', 'Não')], required=False)
    guest_food_restriction_details = forms.CharField(max_length=200, required=False)
    bringing_kids = forms.ChoiceField(choices=[('yes', 'Sim'), ('no', 'Não')])
    kids_ages = forms.MultipleChoiceField(choices=[('0-4', '0 a 4 anos'), ('5-10', '5 a 10 anos'), ('10+', 'Mais de 10 anos')], required=False)

