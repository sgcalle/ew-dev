# -*- coding: utf-8 -*-

from odoo.http import request, route

from odoo import http

from odoo.addons.adm.models.application.admission_application \
    import Application
from odoo.addons.adm.controllers.admission_controller import \
    AdmissionController


class AisjAdmissionController(AdmissionController):

    @route("/admission/applications/"
           "<model(adm.application):application_id>/"
           "photo-permission-grant-signature", auth="public",
           methods=["GET"], website=True)
    def get_photo_permission_grant_signature(self, application_id, **params):
        return request.render(
            'adm_aisj.template_photo_permission_grant_signature',
            self.compute_view_render_params(application_id))

    # @route("/admission/inquiry", auth="public", methods=["GET"], website=True)
    # def admission_web(self, **params):
    #     countries = http.request.env['res.country'].sudo()
    #     states = http.request.env['res.country.state'].sudo()
    #     contact_times = http.request.env['adm.contact_time']
    #     degree_programs = http.request.env['adm.degree_program']
    #
    #     grade_level = http.request.env['school_base.grade_level']
    #     school_year = http.request.env['school_base.school_year']
    #
    #     family_id = -1
    #
    #     if 'family_id' in params:
    #         family_id = params['family_id']
    #
    #     companies = http.request.env['res.company'].sudo().search([('country_id', '!=', False)])
    #     response = http.request.render('adm_custom.adm_template_admission_inquiry', {
    #         'grade_levels': grade_level.search([('active_admissions', '=', True)]),
    #         'countries': countries.search([]),
    #         'check_family_id': True,
    #         'family_name': '',
    #         'family_id': family_id,
    #         'company': companies and companies[0],
    #     })
    #     return response

    def compute_view_render_params(self, application_id: Application):
        params = (super(AisjAdmissionController, self)
                  .compute_view_render_params(application_id))

        from odoo import api, SUPERUSER_ID

        env = api.Environment(request.env.cr, SUPERUSER_ID,
                              request.env.context)
        additional_support_ids = env['adm_aisj.additional.support'].search([])
        applicant_programs_ids = env['adm_aisj.applicant.programs'].search([])
        interested_options_ids = env['adm_aisj.interested.options'].search([])
        how_hear_about_us_ids = env['adm_aisj.how.hear.about.us'].search([])

        elementary_selection_questions = (AdmissionController
            ._get_values_for_selection_fields(
            'adm.application', 'c_aisj_elementary_q4'))

        params.update({
            'additional_support_ids': additional_support_ids,
            'applicant_programs_ids': applicant_programs_ids,
            'interested_options_ids': interested_options_ids,
            'how_hear_about_us_ids': how_hear_about_us_ids,
            'elementary_selection_questions_vals': elementary_selection_questions,
            })

        return params
