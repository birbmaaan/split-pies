class Api::BillsController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @bills = user.bills.to_a
    co_bills = user.co_bills.to_a
    @bills.concat(co_bills)
    render :index
  end

  def create
    @bill = Bill.new(bill_params)
    if @bill.save!
      render :show
    else
      render json: @bill.errors.full_messages, status: 402
    end
  end

  def update
    @bill = Bill.find_by(id: params[:id])
    if @bill.update(bill_params)
      render :show
    else
      render json: @bill.errors.full_messages, status: 402
    end
  end

  def show
    @bill = Bill.find_by(id: params[:id])
    if @bill
      render :show
    else
      render json: ["Transaction not found"], status: 404
    end
  end

  def destroy
    @bill = Bill.find_by(id: params[:id])
    if @bill
      @bill.destroy
      render :show
    else
      render json: ['Transaction not found'], status: 404
    end

  end

  private
  def bill_params
    params.require(:bill).permit( 
      :description, :category, :amount, :split_equally, :partner_one_id, 
      :partner_two_id, :partner_one_paid_share, :partner_two_paid_share, 
      :partner_one_owed_share, :partner_two_owed_share, :paid_up, :author_id)
  end
end
