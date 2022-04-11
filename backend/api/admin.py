from __future__ import unicode_literals
from django.contrib.auth import get_user_model
from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from api.forms import CustomUserCreationForm
User = get_user_model()

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# from .forms import UserAdminCreationForm, UserAdminChangeForm

from .models import *
from django.contrib.auth import models as auth_models
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import forms as auth_forms
from django.core.exceptions import ValidationError

class CustomUserAdmin(BaseUserAdmin):

    add_form = CustomUserCreationForm
    
    model = User
    list_display = ('full_name','email','phone', 'is_superuser', 'is_active')
    list_filter = ('full_name','email','phone','is_superuser', 'is_active')
    fieldsets = (
        (None, {'fields': ('full_name','email','phone','is_superuser')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('full_name','email','phone', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(CustomUserAdmin, self).get_inline_instances(request, obj)
def validate_password_strength(value):
    """Validates that a password is as least 10 characters long and has at least
    2 digits and 1 Upper case letter.
    """
    min_length = 8

    if len(value) < min_length:
        raise ValidationError(_('Password must be at least {0} characters '
                                'long.').format(min_length))

    # check for 2 digits
    if sum(c.isdigit() for c in value) < 2:
        raise ValidationError(_('Password must container at least 2 digits.'))

    # check for uppercase letter
    if not any(c.isupper() for c in value):
        raise ValidationError(_('Password must container at least 1 uppercase letter.'))

    return value


class AdminPasswordChangeForm(auth_forms.AdminPasswordChangeForm):
    def clean_password1(self):
        return validate_password_strength(self.cleaned_data['password1'])


class UserCreationForm(auth_forms.UserCreationForm):
    def clean_password1(self):
        return validate_password_strength(self.cleaned_data['password1'])


class custUserAdmin(CustomUserAdmin):
    change_password_form = AdminPasswordChangeForm
    add_form = UserCreationForm


# Re-register UserAdmin

admin.site.register(User, custUserAdmin)